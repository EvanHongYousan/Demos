__author__ = 'yantianyu'

from PIL import Image, ImageFilter

im = Image.open('testPic.jpg')

w, h = im.size

print('Original image size: %s %s' % (w, h))

im.thumbnail((w // 2, h // 2))
im2 = im.filter(ImageFilter.BLUR)
print('Resize image to %s %s' % (w // 2, h // 2))

im.save('thumbnail.jpg', 'jpeg')
im2.save('blur.jpg')
