# Setup

This is a step-by-step follow-up guide to set up the same configuration I have on my Arch system.
It serves as a reference in case you need to fix a problem or set up your machine.

## Window Manager

### Bumblebee

Install Bumblebee:

```bash
sudo pacman -S bumblebee
```

Add your user to the Bumblebee group:

```bash
sudo gpasswd -a yousef bumblebee
```

Enable the Bumblebee service:

```bash
sudo systemctl enable bumblebeed.service
```

### Lightdm

Edit the Lightdm configuration file to enable autologin and start Awesome:

-   Uncomment the `autologin-user=` line and add your user. For example: `autologin-user=yousef`

-   Uncomment the `autologin-session=` line and add the window manager. For example: `autologin-session=awesome`

```bash
sudo vim /etc/lightdm/lightdm.conf
```

Create the autologin group:

```bash
sudo groupadd -r autologin
```

Add your user to the autologin group:

```bash
sudo gpasswd -a yousef autologin
```

Enable the Lightdm service:

```bash
sudo systemctl enable lightdm.service
```

### Basic Awesome config

Create the Awesome configuration directory:

```bash
mkdir -p ~/.config/awesome
```

Copy the default Awesome configuration file:

```bash
cp /etc/xdg/awesome/rc.lua ~/.config/awesome
```

Reboot your system to apply the changes:

```bash
reboot
```

## Grub

Add this line `GRUB_FORCE_HIDDEN_MENU="true"` to the Grub configuration file:

```bash
sudo vim /etc/default/grub
```

Add the contents from
[here](https://gist.githubusercontent.com/anonymous/8eb2019db2e278ba99be/raw/257f15100fd46aeeb8e33a7629b209d0a14b9975/gistfile1.sh)
to the following file:

```bash
curl -o /etc/grub.d/31_hold_shift "https://gist.githubusercontent.com/anonymous/8eb2019db2e278ba99be/raw/257f15100fd46aeeb8e33a7629b209d0a14b9975/gistfile1.sh" && echo >> /etc/grub.d/31_hold_shift
```

Make the file executable:

```bash
chmod +x /etc/grub.d/31_hold_shift
```

Regenerate the Grub configuration:

```bash
grub-mkconfig -o /boot/grub/grub.cfg
```

## Sound Card's Power Save

Disable power save for the sound card:

```bash
echo "0" | sudo tee /sys/module/snd_hda_intel/parameters/power_save
```

Create a configuration file to disable audio power save:

```bash
sudo touch /etc/modprobe.d/audio_disable_powersave.conf
```

Add the following line to the configuration file:

```bash
echo "options snd_hda_intel power_save=0" | sudo tee /etc/modprobe.d/audio_disable_powersave.conf
```

## Screen Resolution

To change the screen resolution, you can use the `gtf` and `xrandr` commands
or use an xrandr GUI like [arandr](https://christian.amsuess.com/tools/arandr/).
Alternatively, you can use a script by [Chirag Bhatia](https://github.com/chirag64) to make it easier.

Add the contents from
[here](https://gist.githubusercontent.com/chirag64/7853413/raw/461ae3756ec732b469618f1a5eaf2689359c0cd0/xrandr.sh)
to the following file:

```bash
curl -o ~/xrandr.sh "https://gist.githubusercontent.com/chirag64/7853413/raw/461ae3756ec732b469618f1a5eaf2689359c0cd0/xrandr.sh" && echo >> ~/xrandr.sh
```

Make the script executable:

```bash
chmod +x ~/xrandr.sh
```

Run the script with the desired resolution:

```bash
~/xrandr.sh 1366 768 60
```

## yay

Install Git:

```bash
sudo pacman -S git
```

Change to the `/opt` directory:

```bash
cd /opt
```

Clone the yay repository:

```bash
sudo git clone https://aur.archlinux.org/yay-git.git
```

Change ownership of the cloned repository:

```bash
sudo chown -R yousef:yousef ./yay-git
```

Change to the yay-git directory:

```bash
cd yay-git
```

Build and install yay:

```bash
makepkg -si
```
