#!/usr/bin/env zsh

PHOTO=$1

export DATE=$(echo $PHOTO | jq -M '.createdAt')
export APERTURE=$(echo $PHOTO | jq -M '.aperture')
export CAMERA=$(echo $PHOTO | jq -M '.camera')
export DESCRIPTION=$(echo $PHOTO | jq -M '.description')
export FOCAL_LENGTH=$(echo $PHOTO | jq -M '.focalLength')
export HEIGHT_AT_1200=$(echo $PHOTO | jq -M '.heightAt1200')
export ISO=$(echo $PHOTO | jq -M '.iso')
export SHUTTER_SPEED=$(echo $PHOTO | jq -M '.shutterSpeed')
export TAGS=$(echo $PHOTO | jq -Mrj '.tags')
export CLOUDINARY_URL=$(echo $PHOTO | jq -M '.url')
export NAME=$(echo $PHOTO | jq -Mr '.name')

hugo new photography/$(echo $NAME | awk '{ gsub (" ", "-", $0); print tolower($0) }').md

git checkout master
git fetch --all
git rebase origin/master
git add .
git commit -S -m "feat: Add new photo"
git push origin master
git checkout -
