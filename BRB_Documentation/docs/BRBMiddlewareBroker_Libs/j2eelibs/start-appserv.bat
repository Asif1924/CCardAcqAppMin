@echo off

REM
REM Copyright 1997-2007 Sun Microsystems, Inc. All rights reserved.
REM Use is subject to license terms.
REM

setlocal
call D:\Dev\SunJavaEE5\config\asenv.bat
call %AS_INSTALL%\bin\asadmin.bat start-appserv
pause
endlocal