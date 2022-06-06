chrome.runtime.onMessage.addListener(
    function(arg, sender, sendResponse) {
        
        downloadLastAndSchedule(arg);
        return Promise.resolve("Dummy response to keep the console quiet");
     }
  );
  
    function downloadLastAndSchedule(listOfFiles)
    {
        if (listOfFiles.length > 0) {
            var link = 'https://mssp.portal.ca-staff.eu/' + listOfFiles.pop();
            var pdfName = link.split('/').pop().split('#')[0].split('?')[0];
            chrome.downloads.download({url: link, filename: "rmua/" + pdfName});
            sleep(300).then(() => { downloadLastAndSchedule(listOfFiles);});
        }

    }
    function sendResponse(){
    }
    function sleep (time) {
        return new Promise((resolve) => setTimeout(resolve, time));
      }