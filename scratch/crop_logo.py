from PIL import Image

logo_path = 'public/assets/netcradus logo.png'
img = Image.open(logo_path)
print("Original size:", img.size)

# Convert to grayscale to find non-black bounding box
gray = img.convert('L')
# Thresholding: any pixel brighter than threshold 15 is considered part of the logo content
threshold = 15
bw = gray.point(lambda p: 255 if p > threshold else 0)
bbox = bw.getbbox()
print("Bounding box:", bbox)

if bbox:
    left, upper, right, lower = bbox
    # Add a small padding around the cropped text
    pad_h = 10
    pad_v = 15
    crop_box = (
        max(0, left - pad_h),
        max(0, upper - pad_v),
        min(img.width, right + pad_h),
        min(img.height, lower + pad_v)
    )
    cropped = img.crop(crop_box)
    print("Cropped size:", cropped.size)
    cropped.save(logo_path)
    cropped.save('netcradus-uk-react/public/assets/netcradus logo.png')
    print("Successfully cropped and saved logo!")
