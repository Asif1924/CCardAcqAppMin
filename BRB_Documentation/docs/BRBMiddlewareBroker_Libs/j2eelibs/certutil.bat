@echo off

REM
REM Copyright 1997-2007 Sun Microsystems, Inc. All rights reserved.
REM Use is subject to license terms.
REM

setlocal
call D:\Dev\SunJavaEE5\config\asenv.bat
set PATH=%6;%7;%PATH%
call %8\certutil.exe %1 %2 %3 %4 %5
