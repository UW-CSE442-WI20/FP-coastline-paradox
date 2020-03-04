import cv2
import numpy as np
import argparse
import os

es = [120, 125]

IMG_PATH = "./great_britain.png" # we're only going to use this one source image of great britain

def main(args):
    EPSILON = args.EPSILON # optional argument, defaults to 5.0
    GENERATE = args.generate # flag for generating files based on step size
    STEP_SIZE = args.STEP_SIZE # step size (will be rounded to nearest integer)

    print("\nLoading image: ", IMG_PATH, "'")

    img = cv2.imread(IMG_PATH)
    img_gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    _, threshold = cv2.threshold(img_gray, 245, 255, cv2.THRESH_BINARY_INV)
    ch = contours, hierarchy = cv2.findContours(threshold.copy(), cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_NONE)

    if GENERATE:
        WORKING_DIRECTORY = os.getcwd()
        print ("The current working directory is %s" % WORKING_DIRECTORY)
        export_path = WORKING_DIRECTORY + "/generated"

        try:
            os.mkdir(export_path)
        except OSError:
            print ("Creation of the directory %s failed" % export_path)
        else:
            print ("Successfully created the directory %s " % export_path)

        num_steps = int(round(100 / STEP_SIZE))
        print ("Generating ", num_steps, " images using epsilon step size ", STEP_SIZE)
        epsilons = [STEP_SIZE * i for i in range (0, num_steps)]
        for e in epsilons:
            result_img, result_target_len, result_approx_len = generate_approx(img.copy(), contours, e)
            image_name = "/result_len_" + str(int(round(result_approx_len))) + "_epsilon_" + str(e).replace(".","d") + ".png"
            file_path = export_path + image_name
            cv2.imwrite(file_path, result_img)

        print("done generating files")

    else:
        print("Approximating using epsilon =", str(EPSILON))

        result_img, result_target_len, result_approx_len = generate_approx(img.copy(), contours, EPSILON)

        print("\napproximation length ", result_approx_len)
        print("target length ", result_target_len)

        cv2.imshow("contour on img", result_img)

        print("\npress Q at any time to quit", result_target_len)

        while cv2.waitKey(0) != ord('q'):
            pass
        cv2.destroyAllWindows()

        print("exited", result_target_len)

def generate_approx(img, contours, EPSILON):
    target_length = 0
    approx_length = 0
    # calculate
    for i in range(0,len(contours)):
        targetCurve = contours[i]
        approxCurve = cv2.approxPolyDP(targetCurve, EPSILON, True)
        targetArclen = cv2.arcLength(targetCurve, True)
        approxArclen = cv2.arcLength(approxCurve, True)
        
        # color crap
        cdiff = (255 * i / len(contours))
        r = cdiff
        g = 255 - cdiff
        b = cdiff / 2

        # draws approximation
        cv2.drawContours(img, [approxCurve], -1, (r,g,b), 3, cv2.LINE_AA)

        target_length += targetArclen
        approx_length += approxArclen

    return (img, target_length, approx_length)

if __name__ == "__main__":
    """ This is executed when run from the command line """
    parser = argparse.ArgumentParser()
    parser.add_argument("-e", "--epsilon", action="store", dest="EPSILON", type=float, default=5.0)
    parser.add_argument("-gen", "--generate", action="store_true")
    parser.add_argument("-s", "--stepsize", action="store", dest="STEP_SIZE", type=float, default=2.5)
    args = parser.parse_args()
    main(args)
