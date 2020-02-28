import cv2
import numpy as np
import argparse

IMG_PATH = "./great_britain.png"

def main(args):
    EPSILON = args.EPSILON # optional argument, defaults to 5.0

    print("\nLoading image: ", IMG_PATH, "'")
    print("Approximating using epsilon =", str(EPSILON))

    img = cv2.imread(IMG_PATH)
    img_gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    _, threshold = cv2.threshold(img_gray, 245, 255, cv2.THRESH_BINARY_INV)
    ch = contours, hierarchy = cv2.findContours(threshold.copy(), cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_NONE)

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

    print("\napproximation length ", approx_length)
    print("target length ", target_length)

    cv2.imshow("contour on img", img)

    print("\npress Q at any time to quit", target_length)

    while cv2.waitKey(0) != ord('q'):
        pass
    cv2.destroyAllWindows()

    print("exited", target_length)

def boxcount():
    return 5

if __name__ == "__main__":
    """ This is executed when run from the command line """
    parser = argparse.ArgumentParser()
    parser.add_argument("-e", "--epsilon", action="store", dest="EPSILON", type=float, default=5.0)
    args = parser.parse_args()
    main(args)
