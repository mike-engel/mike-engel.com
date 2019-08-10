#!/usr/bin/env bash

PHOTO="$1"

jq ". |= [$PHOTO] + ." ./constants/photography.json | sponge ./constants/photography.json

git checkout master
git fetch --all
git rebase origin/master
git add ./constants/photography.json
git commit -S -m "feat: Add new photo"
git push origin master
git checkout -
