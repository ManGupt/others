Source:
- https://github.com/odoo/odoo.git

Dependencies:
Python >3.7
- https://www.python.org/ftp/python/3.8.5/python-3.8.5-amd64.exe
PostgreSQL
- https://www.enterprisedb.com/downloads/postgres-postgresql-downloads
Install the Build Tools for Visual Studio. Select C++ build tools.
- https://aka.ms/vs/17/release/vs_BuildTools.exe
- cd C:\backup\repo\odoo\odoo-16.0\odoo-16.0\
- pip install setuptools wheel
    - The script wheel.exe is installed in 'C:\Users\mkgupta\AppData\Roaming\Python\Python311\Scripts' which is not on PATH.
    - default site-packages in 'c:\users\mkgupta\appdata\roaming\python\python311\site-packages'
- pip install -r .\requirements.txt
    - MS Build Tools for C++ needed
- INFO ? odoo.addons.base.models.ir_actions_report: You need Wkhtmltopdf to print a pdf version of the reports.
    - https://github.com/wkhtmltopdf/wkhtmltopdf/releases/download/0.12.5/wkhtmltox-0.12.5-1.msvc2015-win64.exe

Running:
- python odoo-bin -r dbuser -w dbpassword --addons-path=addons -d mydb
    - once: -i base,web
- python odoo-bin -r odoo -w odoo --addons-path="addons,../mkg" -d odoo
    - once: -i base,web
    - once (for update): -u mkgbase
Login:
- open http://localhost:8069
- admin/admin
- Activate "Notes" app
    - Settings ‣ General Settings ‣ Developer Tools and click on Activate the developer mode

Load new app:
- Restart the Odoo server and go to Apps. Click on Update Apps List

