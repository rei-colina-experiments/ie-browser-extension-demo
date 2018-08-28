window.forge = {}; window.forge.config = {
    "author": "None", 
    "config_hash": "CONFIG_HASH_HERE", 
    "config_version": "4", 
    "core": {
        "firefox": {
            "package_name": "7072e104765748d9bf45067ac605916b"
        }, 
        "general": {
            "reload": true
        }, 
        "ie": {
            "package_name": "{E2944EDD-5864-C2A9-CAD9-391574428DC5}"
        }, 
        "safari": {
            "package_name": "forge.safari.ietest7072e104765748d9bf45067ac605916b"
        }
    }, 
    "description": "An empty app created by default", 
    "json_safe_name": "ie-test", 
    "logging": {
        "level": "DEBUG"
    }, 
    "logging_level": "DEBUG", 
    "name": "ie-test", 
    "package_name": "ietest7072e104765748d9bf45067ac605916b", 
    "platform_version": "v1.4", 
    "plugins": {
        "activations": {
            "config": {
                "activations": [
                    {
                        "all_frames": true, 
                        "patterns": [
                            "https://github.com/"
                        ], 
                        "run_at": "ready", 
                        "scripts": [
                            "src/js/content.js"
                        ], 
                        "styles": []
                    }
                ]
            }, 
            "hash": "notahash"
        }, 
        "background": {
            "config": {
                "files": [
                    "js/background.js"
                ]
            }, 
            "hash": "notahash"
        }, 
        "contact": {
            "hash": "notahash"
        }, 
        "file": {
            "hash": "notahash"
        }, 
        "media": {
            "hash": "notahash"
        }, 
        "prefs": {
            "hash": "notahash"
        }, 
        "request": {
            "config": {
                "permissions": [
                    "http://*/*", 
                    "https://*/*"
                ]
            }, 
            "hash": "notahash"
        }
    }, 
    "uuid": "7072e104765748d9bf45067ac605916b", 
    "version": "0.1", 
    "xml_safe_name": "ie-test"
};