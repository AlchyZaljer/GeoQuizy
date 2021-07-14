# **GeoQuizy**  
  
### *"Географическая викторина"*  
  
## **Описание**:  

В игре требуется за выбранное время *(30 сек по умолч.)* дать выбранное количество верных ответов *(3шт по умолч.)* (+ 5 сек за верный ответ).  
  
Проигрыш наступает, если закончилось отведённое время, а нужное количество верных ответов не было получено, или была нажата кнопка *"Конец игры"*.  
  
## **Принцип работы:**
  
### **Стартовый экран:**

- кнопка *"Начать игру"* запускает стартовый таймер  
  
- *Стартовый таймер* дает 3 сек для подготовки к игре  
  
**Настройки:**  
  
- *Прокрутка таймера* позволяет выбрать время игры  
  
- *Прокрутка количества ответов* - выбор количества необходимых верных ответов на игру  
  
### **Игровое поле:**  
  
**Слева:**  
  
- *окно состояния* показывает верность/неверность выбранного ответа  
  
- кнопка *"Конец игры"* автоматически останавливает игру проигрышем  
  
**Справа:**  
  
- *игровой таймер* показывает оставшееся время на игру  
  
- *счетчик верных ответов* показывает количество верных ответов относительно необходимого  
  
**Область викторины** позволяет выбрать желаемый ответ из 4х предложенных  
  
### **Окончание игры:**
  
**Победа:**  
  
- если набрано нужное количество верных ответов - вывод сообщения о победе, переход на стартовый экран
  
**Проигрыш:**  
  
- если время игры закончилось, а условие победы не выполнено - вывод сообщения о проигрыше, переход на стартовый экран
  
- если нет условий для победы и нажата кнопка *"Конец игры"* - вывод сообщения о проигрыше, переход на стартовый экран
