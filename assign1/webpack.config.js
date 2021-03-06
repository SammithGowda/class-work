const path = require("path")
module.exports={
    entry:"./src/index.js",
    output:{
        path:path.resolve(__dirname,"build"),
        filename: "bundle.js"

    },
    module: {
        rules: [{ test: /\.css$/, use: ["style-loader","css-loader"]
     },
     {
        test: /\.(png|jp(e*)g|svg)$/,  
        use: [{
            loader: 'file-loader',
            options: { 
                limit: 8000, // Convert images < 8kb to base64 strings
                name: 'images/[hash]-[name].[ext]'
            } 
        }]
    }
    ],
      },

}