sudo apt-get update

sudo apt-get upgrade

# Install git
sudo apt-get install git

# Check git
git --version

# Install nvm (Latest 0.33.11, for more: https://github.com/creationix/nvm)
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

source ~/.bashrc

# Check nvm
echo -n "nvm version: "
nvm --version

# Current LTS is 10.15.0. Install it. 
nvm install 10.15.0

# Check node
echo -n "node version: "
node --version
