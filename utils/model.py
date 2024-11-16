import sys
import json
import pickle
import numpy as np
from sklearn.preprocessing import StandardScaler
from sklearn.preprocessing import LabelEncoder

def predict(location, metros, habitaciones, banos, model_file):
    try:
        # Cargar modelo y otros objetos necesarios
        with open(model_file, 'rb') as file:
            data = pickle.load(file)
        
        model = data['modelo']
        scaler = data['scaler']
        le = data['label_encoder']
        
        # Preparar datos de entrada
        location_encoded = le.transform([location])[0]
        X_pred = np.array([[location_encoded, metros, habitaciones, banos]])
        X_pred_scaled = scaler.transform(X_pred)
        
        # Realizar predicción
        prediccion = model.predict(X_pred_scaled)[0]
        
        # Calcular el rango de precios
        min_price = prediccion * 0.9
        max_price = prediccion * 1.1
        
        # Preparar la respuesta
        result = {
            'predicted_price': prediccion,
            'min_price': min_price,
            'max_price': max_price
        }

        return json.dumps(result)
    
    except Exception as e:
        return json.dumps({"error": str(e)})

if __name__ == "__main__":
    # Leer parámetros pasados por la línea de comandos
    location = sys.argv[1]
    metros = float(sys.argv[2])
    habitaciones = int(sys.argv[3])
    banos = int(sys.argv[4])
    model_file = sys.argv[5]
    
    # Realizar la predicción
    result = predict(location, metros, habitaciones, banos, model_file)
    print(result)
