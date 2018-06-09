# open-a-post
little shell script that helps you easily open a jekyll blog post with vim

## Usage 
```
chmod u+x openAPost.sh
./openAPost.sh [search keyword in one word]
```

## Example
```
$ ls
2017-09-21-hacking-facebook.md
2017-09-21-using-macchanger.md
2017-09-21-Using-tmux.md
2017-09-23-Changing-mac-address-without-macchanger.md
2017-09-23-Editing-environment-path-and-adding-custom-scripts.md
2017-09-25-Configuring-vim.md
2017-09-25-Turning-monitor-mode-on-and-off.md
2017-09-25-Using-metaexpolit-(1).md
2017-09-28-Editing-environment-path-and-adding-custom-scripts-(2).md
2017-09-28-Using-bluetooth-on-kali-linux.md
2017-09-28-Using-vim.md
2017-09-29-Hacking-instagram-(1).md
2017-09-29-Using-tor.md
2017-10-01-Difference-among-const-let-and-var.md
2017-10-02-wildcards.md

$ ./openAPost.sh Using
Enter the number to select the post that you want to open in vim.
Found 6 of posts of matching names:
1) 2017-09-21-using-macchanger.md
2) 2017-09-21-Using-tmux.md
3) 2017-09-25-Using-metaexpolit-(1).md
4) 2017-09-28-Using-bluetooth-on-kali-linux.md
5) 2017-09-28-Using-vim.md
6) 2017-09-29-Using-tor.md
#? 6

Then vim opens for 2017-09-29-Using-tor.md.
```

This shell script is useful when you have a lot of posts.
