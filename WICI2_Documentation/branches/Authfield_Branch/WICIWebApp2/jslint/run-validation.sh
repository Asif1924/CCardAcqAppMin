#!/bin/bash

SRC_ROOT=../app
REPORT_ROOT=./reports/jslint

find "$(SRC_ROOT)" -name '*.js' -exec ./scripts/run-jslint.sh {}
find "$(SRC_ROOT)" -name '*.css' -exec ./scripts/run-jslint.sh {}
rm -rf "$(REPORT_ROOT)"
mkdir -p "$(REPORT_ROOT)"
find "$(SRC_ROOT)" -name '*.js' -exec ./scripts/jslint-to-xml.sh {} "$(REPORT_ROOT)"
find "$(SRC_ROOT)" -name '*.css' -exec ./scripts/jslint-to-xml.sh {} "$(REPORT_ROOT)"
