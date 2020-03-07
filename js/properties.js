let systemInfo = {header: 'MConsole Web Under Construction', version: '0.0.3', stable: false, usable: true, summary: 'MConsole Web Under Construction ', description: 'MConsole Web Under Construction version', copyright: 'Copyright &copy; 2020 Martin C. All rights reserved.'};

let commands = {'about': 'Show MConsole Info.', 'applog': 'Show the information of all the changes.', 'calc': 'Do a simple calculations.', 'clr, cls, clear': 'Clear screen.',"date": "Show date.", 'echo': 'Do a text echo.', 'head, header': 'Set header. (clear, default, empty, null, reset)', 'help, ?': 'Show commands.', 'msg': 'Set header message. (clear, empty, null)',"time": "Show current time. (12, 24)" , "tips": "Show or hide tips.", 'ver': 'Show MConsole version.'};

let tips = ['If you want to know more information about version and copyright, type "about".',
'To display all the Previous and current feature changes and application logs, type "applog".',
'If you want to display file system for each partition in your hard drive and USB flash drive, type "alldrives".',
'To run simple calulations, type "calc"',
'Type "cd" to change current directory/folder.',
'Type "cls" to clear sereen.',
'If you want to display 3 command that recently used, type "comandview".',
'If you want to copy your file once, use "copy" command. However, you need to use "copydir" if you want to copy more than one file, or your directory/folder.',
'Type "date" to display date and time.',
'You can show all partition(s) you have on your disk(s) like C:\, D:\ by typing "drives" command.',
'Type "echo" if you want to copy or echo a message you want.',
'Type "help" if you forgot any commands.',
'If you want to create a directory/folder, type "md".',
'If you want to move your file once, use "move" command. However, you need to use "movedir" if you want to move your directory/folder.',
'Type "open" to open any file or folder. For executable, use "run" command instead.',
'Type "rename" to change file name. Also, you can change directory/folder\'s name by using "renamedir".',
'Type "restart" to restart MConsole.',
'Type "settings" to open and change MConsole settings.',
'Show your host system you using by using "sysinfo" command.',
'Type "time" to display time and date.',
'Type "ver" to show MConsole version.',
'Type "where" to show current directory or folder location, you can also find out same information from *Location* tag on the next line.',
'Type "who" to know which name are you using.',
'Type "settings" then type "display" and "colorize" to toggle colorize mode.',
'Type "settings" then type "display" and "location" to toggle displaying your current directory when startup.',
'Type "settings" then type "privacy" and "commandview" to enable recording command history.',
'Type "settings" then type "user" to change current username.',
'MConsole uses user name of user that currently logged in. You can change it in user settings.',
'MConsole uses different greetings in different timings.',
'If you want to find the content in this console, press Ctrl+F then type.',
'Type "ping" to verify if computers or servers in network are discoverable and/or communicable.',
'Type "network" to show all the information of network adapters you have.',
'You can create text-based file in any extension format by using "makefile" command.',
'MConsole enables you to change greetings in settings.',
'Now you can change your theme in theme settings.',
'Some users may love centered startup title in old style. MConsole can enable that in title alignment settings.',
'You can change your own window title content in title settings.']

let applog = {
    '0.0.0': 'Under construction version, Add about, echo, help, ver commands.',
    '0.0.1': 'Inital under construction version; Add clr, msg commands; Add up arrow history support.',
    '0.0.2': 'Add portable/"plug and use" support.',
    '0.0.3': 'Add Tips feature, date, time, header, applog command. Fix table alignment in help command.'
}


var systemProp = {"header": "", 'twentyFourHoursDisplay': false};