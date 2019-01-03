---
title: Deleting a node_modules folder on windows without downloading anything
date: '2016-05-09T00:00:00.000Z'
---

![alt text ](/images/delete-node-modules.png "Deleting a  
node_modules folder on windows")

# Windows and node_modules folders

When trying to delete a node\_modules folder within windows explorer you  
will be presented with a windows dialog saying the 'The folder contains items  
whose names are too long for the Recycle Bin.' This is due to a restriction  
of the NTFS file system where the MAX_PATH of a complete directory file  
path cannot be more than 260 characters in length.

As a consequence, when windows tries to move the node_modules folder into  
the Recycle Bin, the tendency of node dependencies to create multiple  
nested folders and therefore file path names exceeding 260 characters,  
prevents the files from being moved to the recycle bin.

![alt text ](/images/long-file-names-node-modules.png "Long file names dialog 
when deleting a node_modules folder on windows")

## Deleting node_modules folders on windows

When searching online for solutions for deleting a node\_modules on windows you can find 
recommendations to install the excellent <a href="https://github.com/isaacs/rimraf">RimRaf</a> 
util via npm but you can remove the folders without downloading any utils.

## Deleting node_modules folders on windows without downloading anything

### Steps to follow

#### Open the windows command prompt

Windows start button / type command prompt

#### Change directory to your c drive root

```

cd c:\

```

#### Create a temp folder

```

mkdir temp

```

#### Use the built in robocopy to remove the node_modules folder that you wish to delete.

Tip: you only need to type up to the first three letters of a directory name (depending on 
similar directory names) and then you can press tab to autocomplete the name.

```

robocopy /MIR c:\temp c:\inetpub\wwwroot\sample_app\node_modules

```

*robocopy is short for “Robust File Copy” which on from windows vista onwards had replaced 
xcopy.* 

*/MIR is short for Mirror meaning copy (mirror) files from the first folder*

This command will have the effect of destroying any files in the second folder that are 
not present in the first folder.

So, as you created an empty folder *c:\temp* all files within *c:\inetpub\wwwroot\sample_app\
node\_modules* are not present in *c:\temp* and so all files will be deleted (destroyed).

#### Then to delete the empty node_modules folder type

```

RD c:\inetpub\wwwroot\sample_app\node_modules

```

Where RD stands for Remove Directory.
