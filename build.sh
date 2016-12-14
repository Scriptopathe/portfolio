user=$1
echo "Build..."
ng build --base-href /~$user/portfolio/dist/
echo "Tar..."
tar -cvf dist.tar dist/
echo "Scp"
scp dist.tar $user@etud.insa-toulouse.fr:~/portfolio.tar
echo "SSH"
ssh $user@etud.insa-toulouse.fr << EOSSH
tar -xvf portfolio.tar -C public_html/portfolio
exit
EOSSH

