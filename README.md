For this code to work, run this in terminal:
alias served="ruby -r webrick -e \"s = WEBrick::HTTPServer.new(:Port => 9090, :DocumentRoot => Dir.pwd); trap('INT') { s.shutdown }; s.start\""

Then go to the folder where the files are located and run: 
served

After the server starts, access the site here:
http://localhost:9090
