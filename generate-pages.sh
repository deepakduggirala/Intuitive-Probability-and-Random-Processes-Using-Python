#!/bin/bash

jupyter nbconvert --to html *.ipynb
mv *.html docs/
cd docs/
node index.js