# coastline contour length approximation 

**NOTE** we are using **python3**, and this project relies on **cv2** and **numpy**
Make sure to install dependencies using 
`pip3 install -r requirements.txt`

Display a single approximation:
1. run `python3 contour_approx.py` to approximate the length of great britain's coastline using default epsilon of 5.0
2. run `python3 contour_approx.py -e 2.5` to specify epsilon of 2.5, etc.
3. press q with the window focused to quit

Generate and save approximations based on step size (epsilon ranges from 0 to 100):
*Warning: the program will generate int(round(100 / step_size)) number of pictures*
1. run `python3 contour_approx.py -gen` to generate approximation images using default epsilon step size of 2.0
2. run `python3 contour_approx.py -gen -s 1.5` to generate approximation images using default epsilon step size of 1.5

images will be saved in "./generated" and images filenames contain the length data in the following format: "result_len_\[APPROXIMATE_LENGTH\]_epsilon\[EPSILON\]"
e.g. "result_len_2782_epsilon_27d5.png" means approx length of 2782, using an epsilon of 27.5

The "true" length of this image is 4250.5162653923035