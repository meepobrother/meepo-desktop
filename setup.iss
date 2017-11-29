rm -rf release/

electron-windows-inno-installer ./setup.iss --platform win32-x64 --icon ./resources/icon.ico
