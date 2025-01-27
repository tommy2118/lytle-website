#!/bin/bash
# Optimize JPEG
find ./images -type f -iname "*.jpg" -exec jpegoptim --max=85 --strip-all {} \;
find ./images -type f -iname "*.jpeg" -exec jpegoptim --max=85 --strip-all {} \;

# Optimize webp
find ./images -type f -iname "*.webp" -exec cwebp -q 80 {} -o {}.webp \;

# Optimize PNG
find ./images -type f -iname "*.png" -exec pngquant --quality=65-80 --ext .png --force {} \;

# Resize large images
find ./images -type f \( -iname "*.jpg" -o -iname "*.png" \) -exec convert {} -resize 1024x {} \;
find ./images -type f \( -iname "*.jpeg" -o -iname "*.png" \) -exec convert {} -resize 1024x {} \;
find ./images -type f -iname "*.webp" -exec cwebp -resize 1024 0 {} -o {}.webp \;

echo "Optimization completed!"

