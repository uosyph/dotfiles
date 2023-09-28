#!/bin/bash

# Download the official package list and install them
curl -o ~/official_pkglist.txt "https://raw.githubusercontent.com/yousafesaeed/dotfiles/main/pkglist/official_pkglist.txt" && echo >> ~/official_pkglist.txt

pacman -S --noconfirm --needed - < ~/official_pkglist.txt
rm ~/official_pkglist.txt

# Add the user to the Bumblebee group and enable its service
sudo gpasswd -a yousef bumblebee
sudo systemctl enable bumblebeed.service

# Create the Xinit config and add AwesomeWM
touch ~/.xinitrc && echo "exec awesome" >> ~/.xinitrc

# Edit the Lightdm config
echo -e "\nautologin-user=yousef\nautologin-session=awesome\n" | sudo tee -a /etc/lightdm/lightdm.conf 

# Create the autologin group and add the user to it
sudo groupadd -r autologin
sudo gpasswd -a yousef autologin

# Enable the Lightdm service
sudo systemctl enable lightdm.service

# Add the basic Awesome config
mkdir -p ~/.config/awesome && cp /etc/xdg/awesome/rc.lua ~/.config/awesome

# Edit the Grub config
echo -e '\nGRUB_FORCE_HIDDEN_MENU="true"\n' | sudo tee -a /etc/default/grub

# Enable Grub when pressing the shift key
curl -o /etc/grub.d/31_hold_shift "https://gist.githubusercontent.com/anonymous/8eb2019db2e278ba99be/raw/257f15100fd46aeeb8e33a7629b209d0a14b9975/gistfile1.sh" && echo >> /etc/grub.d/31_hold_shift

chmod +x /etc/grub.d/31_hold_shift
grub-mkconfig -o /boot/grub/grub.cfg

# Disable power save for the sound card
echo "0" | sudo tee /sys/module/snd_hda_intel/parameters/power_save
sudo touch /etc/modprobe.d/audio_disable_powersave.conf
echo "options snd_hda_intel power_save=0" | sudo tee /etc/modprobe.d/audio_disable_powersave.conf

# Change the resolution
# Script by Chirag Bhatia - github.com/chirag64
curl -o ~/xrandr.sh "https://gist.githubusercontent.com/chirag64/7853413/raw/461ae3756ec732b469618f1a5eaf2689359c0cd0/xrandr.sh" && echo >> ~/xrandr.sh

chmod +x ~/xrandr.sh
~/xrandr.sh 1366 768 60

# Create an Xresources file and put the dpi in it, then apply the changes
touch ~/.Xresources && echo "Xft.dpi: 100" >> ~/.Xresources
xrdb -merge ~/.Xresources

# Make the system apply the dark theme
touch /etc/gtk-3.0/settings.ini && echo "gtk-application-prefer-dark-theme = true" >> /etc/gtk-3.0/settings.ini

# Change the pacman config
echo -e "\nColor\nILoveCandy\n" | sudo tee -a /etc/pacman.conf

# Make pacman faster
sudo cp /etc/pacman.d/mirrorlist /etc/pacman.d/mirrorlist.bak
sudo reflector --verbose --latest 10 --protocol https --sort rate --save /etc/pacman.d/mirrorlist

# Add the user to the video group
sudo usermod -aG video $USER

# Add keybindings
curl -o ~/.xbindkeysrc "https://raw.githubusercontent.com/yousafesaeed/dotfiles/main/.xbindkeysrc" && echo >> ~/.xbindkeysrc
xbindkeys

# Install yay
cd /opt && sudo git clone https://aur.archlinux.org/yay-git.git
sudo chown -R yousef:yousef ./yay-git
cd yay-git && makepkg -si

# Download the AUR package list and install them
curl -o ~/aur_pkglist.txt "https://raw.githubusercontent.com/yousafesaeed/dotfiles/main/pkglist/aur_pkglist.txt" && echo >> ~/aur_pkglist.txt

yay -S --noconfirm --needed - < ~/aur_pkglist.txt
rm ~/aur_pkglist.txt
