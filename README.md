Send mail from a react app form to a php script

Development : 

PHP SCRIPT
Put the repository named 'demo-react' in the htdocs repository if you use MAMP for php localserver.

REACT APP
In Contact component, replace '[YOUR_PHP_LOCALSERVER_URL]' by your php local server url ( exemple: http://localhost:8888 ).

Production:

REACT APP
In Contact component, delete "[YOUR PHP LOCALSERVER URL]", just let the  php script path
In package.json add  "homepage": "[DOMAIN OF YOUR WEBSITE]" just below "private"

npm run built

You can add the contain of the built repository and the demo-react repository in the FTP server






