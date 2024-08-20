#
# ~/.bashrc
#

# If not running interactively, don't do anything
[[ $- != *i* ]] && return

alias ls='ls --color=auto'
alias grep='grep --color=auto'
PS1='[\u@\h \W]\$ '

export PATH=$PATH:/home/yousef/.spicetify:/home/yousef/.local/bin

export HISTCONTROL=ignoredups:ignorespace
HISTIGNORE="shutdown*:reboot*:rm -rf*:rm -r*:sudo rm -rf*:sudo rm -r*"

alias py='python'
alias cell='celluloid'
alias gedit='gnome-text-editor'
alias ctc='xclip -sel c <'
alias nf='neofetch'

nut() {
    nohup nautilus -w $1 > /dev/null 2>&1 &
}

eval "$(starship init bash)"
