#!/bin/bash
fileToMove=""
folderToGo=""
newName=""
if [ ! "$#" -eq "1" ]
then
    echo "You must enter the name you want to rename the file to as a single argument."
    exit 1
fi
function show_menu {
    if [ -z "$(ls -A *.png)" ]
    then
        echo "pwd is empty. Exiting."
        exit 1
    fi

    echo "Select a file to move and then rename"
    OPTIONS1="`ls -1 *.png`"
    select option in "${OPTIONS1[@]}";
    do
        if [ ! -z "$option" ]
        then
             fileToMove=$option
        else
            echo "Inavlid option. Try again"
            show_menu
        fi
        break
    done
}

function get_subdir {
    echo "Select the subdirectory in blog/assets/image: "
    OPTIONS2="`ls -1d ~/Documents/GithubWorks/Mr-Polite.github.io/assets/images/*`"
    select option in "${OPTIONS2[@]}";
    do
        if [ ! -z "$option" ]
        then
             folderToGo=$option
        else
            echo "Inavlid option. Try again"
            get_subdir
        fi
        break
    done
}

show_menu
get_subdir
echo "==========="
echo "==========="
mv "$fileToMove" "$folderToGo/$1.png"
echo "done"
