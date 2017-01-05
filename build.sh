user=$1
echo "Build..."
if [ "$2" != "nobuild" ]
then
	ng build --base-href /~$user/portfolio/dist/
fi
echo "Tar..."
tar -cvf dist.tar dist/
echo "Scp"
scp dist.tar $user@etud.insa-toulouse.fr:~/portfolio.tar
echo "SSH"
ssh $user@etud.insa-toulouse.fr << EOSSH
rm -rf public_html/portfolio
mkdir public_html/portfolio
tar -xvf portfolio.tar -C public_html/portfolio
exit
EOSSH

