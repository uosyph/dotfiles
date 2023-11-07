#
# ~/.bashrc
#

# If not running interactively, don't do anything
[[ $- != *i* ]] && return

alias ls='ls --color=auto'
alias grep='grep --color=auto'
PS1='[\u@\h \W]\$ '

PATH=~/.console-ninja/.bin:$PATH
export PATH=$PATH:/home/yousef/.spicetify:/home/yousef/.local/bin:/usr/bin/python:usr/local/bin/python
export HISTCONTROL=ignoredups:ignorespace
HISTIGNORE="shutdown reboot"

eval "$(starship init bash)"
