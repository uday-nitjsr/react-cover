module.exports={
    "entry": "./src/index.js",
    "output": {
        "filename": "bundle.js"
    },
    "module": {
        "rules": [
            {
                "test": /\.js$|\.jsx$/,
                "exclude": /node_modules|\.spec\.js$/,
                "use": {
                    "loader": "babel-loader",
                    "options":{
                        "esModule":true
                    }
                },
                "enforce":"post"
            }
        ]
    }
}