# Finding a random Number 

sayi=$((RANDOM % 100 +1))
echo $sayi
while true; do 

echo "Enter a random Number"    
read ras



    if ! [[ "$ras" =~ ^[0-9]+$ ]];then
    echo "Enter is Number"
    continue
fi
((donme++))
if [ "$ras" -eq "$sayi" ]; then
echo "you guessed rigth "
    echo $donme "Number of rotations "
    break
elif [ "$ras" -gt "$sayi" ]; then 
    echo "Number a smaller number "
    else
    echo "enter a bigger number"


fi

done 
