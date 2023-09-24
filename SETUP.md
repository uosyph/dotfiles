# Setup

This is a step-by-step follow-up guide to set up the same configuration I have on my Arch system.
It serves as a reference in case you need to fix a problem or set up your machine.

## Setup The Window Manager

### Setup Bumblebee

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

### Setup Lightdm

Edit the Lightdm configuration file to enable autologin and start Awesome:

- Uncomment the `autologin-user=` line and add your user. For example: `autologin-user=yousef`

- Uncomment the `autologin-session=` line and add the window manager. For example: `autologin-session=awesome`

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

### Setup Basic Awesome config

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
