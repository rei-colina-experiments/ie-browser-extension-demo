# ie-browser-extension-demo
A sample browser extension for Internet Explorer

## Setup
1. Set up the Trigger Corp Browser Extensions Framework as per instructions in: https://github.com/trigger-corp/browser-extensions
2. Copy the `ie-demo` folder in this repo into your `browser-extensions` folder in your computer.
3. `cd ie-demo`
4. Start your virtual python environment: `source ./python-env/bin/activate` for Unix or `.\python-env\Scripts\activate.bat` for windows.
5. `forge-extension build ie`
6. `forge-extension package ie`
7. Use the installer built in `ie-demo/release/ie/` to install the extension in your Internet Explorer.
6. After installing the extension, if you open Internet Explorer, you will get an `alert` dialog saying that the **background script** is working.
7. If you navigate to https://www.github.com/ using Internet Explorer, you will get an `alert` dialog saying that the **content script** is working.
8. If you open the Developers Tools --> Console, you will see the messages between the content and the background scripts:
```
Sending message 'Hello there!' to the background script...
Backgound script responded with: Backgound job got the message 'Hello there!', and replied back!
```

## How the extension works
The Trigger Corp browser extension framework allows you to build extensions for different platforms with just Javascript and configuration files. The idea of an extension is to "Inject" scripts into web pages. There are two different ways to inject those scripts:

1. **Background Scripts:** If your add-on relies on long-running code which is not attached or associated with any particular web page, you should use background code.This code is loaded once when the browser is open or add-on is loaded/reloaded. It runs until the browser is closed or the add-on is removed. It is good practice to put page independent logic/functionality in the  background. To use background files, you need to use the `background` module (see: http://legacy-docs.trigger.io/en/v1.4/modules/background.html#modules-background)

2. **Content Scripts:** If your add-on works with the individual web pages a user sees, you should use content scripts. For example, an add-on which changes a web page so that any long words are replaced with links to that word in an online dictionary. To use content scripts, you need to use the `activations` module (see: http://legacy-docs.trigger.io/en/v1.4/modules/activations.html#modules-activations)

This sample extension implements both background scripts and content scripts. **You can see the proper configuration in `ie-demo/src/config.json`**
