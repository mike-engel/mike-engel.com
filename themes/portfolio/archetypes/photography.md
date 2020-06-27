---
title: "{{ replace .Name "-" " " | title }}"
layout: photo
date: {{ getenv "DATE" }}
cloudinary_url: {{ getenv "CLOUDINARY_URL" }}
tags: {{ getenv "TAGS" }}
aperture: {{ getenv "APERTURE" }}
shutter_speed: {{ getenv "SHUTTER_SPEED" }}
iso: {{ getenv "ISO" }}
camera: {{ getenv "CAMERA" }}
description: {{ getenv "DESCRIPTION" }}
focal_length: {{ getenv "FOCAL_LENGTH" }}
height_at_1200: {{ getenv "HEIGHT_AT_1200" }}
draft: false
---
