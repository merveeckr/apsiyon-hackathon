function sendNotification() {
    if (Notification.permission === "granted") {
        new Notification("Acil Durum!", {
            body: "Acil bir durum bildirildi.",
            icon: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Windows_Settings_app_icon.png" 
        });
    } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(permission => {
            if (permission === "granted") {
                new Notification("Acil Durum!", {
                    body: "Acil bir durum bildirildi.",
                    icon: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Windows_Settings_app_icon.png"
                });
            }
        });
    }
}

