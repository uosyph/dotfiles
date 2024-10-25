#
# ~/.bashrc
#

# If not running interactively, don't do anything
[[ $- != *i* ]] && return

PS1='[\u@\h \W]\$ '

export PATH=$PATH:/home/yousef/.spicetify:/home/yousef/.local/bin

# Configure History
export HISTCONTROL=ignoredups:erasedups:ignorespace
HISTIGNORE="shutdown*:reboot*:rm -rf*:rm -r*:sudo rm -rf*:sudo rm -r*"

# Configure Aliases
alias ls='ls --color=auto'
alias grep='grep --color=auto'
alias py='python'
alias watch='celluloid'
alias gedit='gnome-text-editor'
alias ctc='xclip -sel c <'
alias nf='neofetch'
alias nv='nvim'
alias src='source venv/bin/activate'

nut() {
  nohup nautilus -w $1 > /dev/null 2>&1 &
}

eval "$(starship init bash)"
