import { useState } from 'react';
import { Button } from 'antd';
import chairImg from './img/chair.png';
import tableImg from './img/table.png';
import chair2 from './img/chair2.png';

export default function DragAndDrop() {
  const items = [
    { name: 'Chair', path: chairImg },
    { name: 'Table', path: tableImg },
    { name: 'Wall', path: chair2 },
  ];

  const [droppedItems, setDroppedItems] = useState([]);

  console.log(droppedItems);
  const handleDragStart = (event, id, item) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const offsetY = event.clientY - rect.top;

    event.dataTransfer.setData('name', item.name);
    event.dataTransfer.setData('path', item.path);
    event.dataTransfer.setData('offsetX', String(offsetX));
    event.dataTransfer.setData('offsetY', String(offsetY));

    if (id !== null) {
      event.dataTransfer.setData('id', String(id));
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const name = event.dataTransfer.getData('name');
    const path = event.dataTransfer.getData('path');
    const offsetX = Number(event.dataTransfer.getData('offsetX'));
    const offsetY = Number(event.dataTransfer.getData('offsetY'));
    const id = event.dataTransfer.getData('id');

    const container = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - container.left - offsetX;
    const y = event.clientY - container.top - offsetY;

    if (id) {
      setDroppedItems((prev) =>
        prev.map((item) =>
          item.id === Number(id) ? { ...item, name, path, x, y } : item
        )
      );
    } else {
      setDroppedItems((prev) => [
        ...prev,
        { id: Date.now(), name, path, x, y },
      ]);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleSaveToFile = () => {
    const data = JSON.stringify(droppedItems, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'droppedItems.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleLoadFromFile = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const text = e.target?.result;
        const data = JSON.parse(text);
        if (!Array.isArray(data)) {
          throw new Error('err');
        }

        setDroppedItems(data);
      } catch (error) {
        console.error('Ошибка загрузки файла:', error);
      }
    };

    reader.readAsText(file);
  };

  return (
    <div>
      <h4>Drag nd Drop</h4>
      <div>
        {items.map((item, index) => (
          <img
            alt={item.name}
            src={item.path}
            key={index}
            draggable
            onDragStart={(e) => handleDragStart(e, null, item)}
            style={{
              width: '50px',
              height: '50px',
              marginBottom: '5px',
              cursor: 'grab',
            }}
          ></img>
        ))}
      </div>
      <div
        className="wrap"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        style={{
          width: '800px',
          height: '600px',
          border: '1px solid black',
          marginTop: '20px',
          position: 'relative',
        }}
      >
        {droppedItems.map((item) => (
          <img
            alt={item.color}
            key={item.id}
            src={item.path}
            draggable
            onDragStart={(e) => handleDragStart(e, item.id, item)}
            style={{
              width: '50px',
              height: '50px',
              backgroundColor: item.color,
              position: 'absolute',
              left: `${item.x}px`,
              top: `${item.y}px`,
              cursor: 'grab',
            }}
          ></img>
        ))}
      </div>
      <div
        style={{
          marginTop: '20px',
        }}
      >
        <Button onClick={handleSaveToFile} type="primary">
          Save
        </Button>
        <input type="file" accept=".json" onChange={handleLoadFromFile} />
      </div>
    </div>
  );
}
