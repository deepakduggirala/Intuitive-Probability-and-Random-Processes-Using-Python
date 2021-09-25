#!/bin/bash

jupyter nbconvert --to html *.ipynb
mv *.html pages/
cd pages/
node index.js