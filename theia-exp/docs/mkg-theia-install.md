# Prerequisites
https://nodejs.org/dist/v16.17.0/node-v16.17.0-linux-x64.tar.gz
https://aka.ms/vs/17/release/vs_buildtools.exe

````
PS C:\Users\mkgupta> npm --version
9.7.1
PS C:\Users\mkgupta> node --version
v16.17.0
PS C:\Users\mkgupta> yarn --version
1.22.19
PS C:\backup\theia\theia\sample> node-gyp --version
v9.4.0
PS C:\Users\mkgupta> git --version
git version 2.37.1.windows.1
PS C:\Users\mkgupta> make --version
GNU Make 4.4.0.90
Built for x86_64-pc-cygwin
PS C:\Users\mkgupta> gcc --version
gcc (GCC) 11.3.0
PS C:\Users\mkgupta> python --version
Python 3.8.5
````
# Theia repo
````
git clone https://github.com/eclipse-theia/theia.git
cd theia
// download dependencies and build TypeScript packages 
yarn
yarn browser build
yarn browser start
````
# Examples
````
// combine browser and electron
// yarn build:examples

// plugin for examples
yarn download:plugins
// Start with SSL
yarn browser start --ssl --cert /path/to/cert.crt --certkey /path/to/certkey.key
````
# Directory structure
Theia repository has multiple folders:
- packages folder contains runtime packages, as the core package and ensions to it
- dev-packages folder contains devtime packages
- @theia/cli is a command line tool to manage Theia applications
- @theia/ext-scripts is a command line tool to share scripts between ia runtime packages
- examples folder contains example applications, both Electron-based and wser-based
- doc folder provides documentation about how Theia works
- scripts folder contains JavaScript scripts used by npm scripts when talling
- the root folder lists dev dependencies and wires everything together with Lerna
````
// localhost:3000
// repo root is THEIA=$PWD
````
# Extensions
````
// Create own extensions
npm install -g yo generator-code
yo code

npm install -g yo generator-theia-extension
yo theia-extension
````
# Watch
````
// To rebuild everything each time a change is detected
yarn watch:all

// Build extension packages individually
npx run compile @theia/package-name
// Watch a specific package
npx run watch @theia/the-package-name
````
But you might have to apply changes in any of its upstream dependencies you can either do yarn watch which could be super expensive, as it ches all the packages.

Or you can do npx run watch @theia/package-name
````
run watch @theia/package-name --include-filtered-dependencies --parallel
````
# Debug
Debug the browser example's frontend and backend at the same time
- Open the debug view and run the Launch Browser Backend configuration.
- Then run the Launch Browser Frontend configuration.

Debug the Electron example's frontend and backend at the same time
- Open the debug view and run the Launch Electron Backend & Frontend configuration.
# Troubleshoots
## Linux
The start command will start a watcher on many files in the theia ory. To avoid ENOSPC errors, increase your default inotify watches.

It can be done like so:
````
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
````
## Windows
If you see
````
LINK : fatal error LNK1104: cannot open file 'C:\\Users\\path\\to\\node.lib' [C:\path\to\theia\node_modules\drivelist\build\drivelist.vcxproj],
````

then set the Visual Studio version manually with:
````
npm config set msvs_version 2017 --global.
````
If you are facing with EPERM: operation not permitted or permission denied errors while building, testing or running the application then;

You don't have write access to the installation directory.
- Try to run your command line (PowerShell, GitBash, Cygwin or whatever you are using) as an administrator.
- The permissions in the NPM cache might get corrupted. Please try to run npm cache clean to fix them.

If you experience issues such as Error: EBUSY: resource busy or locked, rename, try to disable (or uninstall) your anti-malware software.

- Still having issues on Windows? File a [bug]. We are working on Linux or OS X operating systems. Hence, we are more than happy to receive any Windows-related feedbacks, bug reports.
- If you're still struggling with the build, but you use Windows 10, then you can enable the Windows Subsystem for Linux and you can get a Linux distro for free.

# Samples
yo theia-extension --help
yo theia-extension -s <>

Default options can be problematic, force things
````
yo theia-extension -a MKG -v 1.0.0 -d SampleExtn -l Synopsys -t 1.38.0 -s
````