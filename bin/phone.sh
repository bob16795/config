sudo umount ~/mtp
jmtpfs
notify-send "click yes on phone"
sleep 5
jmtpfs ~/mtp
notify-send "copying to phone"
cd ~
git add -A
git commit
git push
cd ~/mtp/Card/Computer
cp ~/Music ~/Documents/ ~/Pictures/ ./ -r
