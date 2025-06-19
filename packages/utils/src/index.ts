export const add = (x: number, y: number) => {
    return x + y
}


const simpleHash = (str: string) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // 转换为32位整数
    }
    return hash.toString(16); // 转换为16进制
}

const generateCanvasFingerprint = () => {
        // 创建canvas元素
        const canvas = document.createElement('canvas');
        canvas.width = 200;
        canvas.height = 100;

        // 获取绘图上下文
        const ctx = canvas.getContext('2d');

        // 填充背景
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // 绘制一些图形和文字
        // 绘制红色矩形
        ctx.fillStyle = 'red';
        ctx.fillRect(20, 20, 50, 50);

        // 绘制蓝色圆形
        ctx.fillStyle = 'blue';
        ctx.beginPath();
        ctx.arc(120, 45, 25, 0, Math.PI * 2);
        ctx.fill();

        // 绘制文本
        ctx.fillStyle = 'black';
        ctx.font = '16px Arial';
        ctx.fillText('Canvas指纹', 60, 80);

        // 获取canvas数据URL
        const dataURL = canvas.toDataURL();


        // 计算指纹
        const fingerprint = simpleHash(dataURL);

        return {
            fingerprint: fingerprint,
            dataURL: dataURL
        };
    }

const GenBroswerFingerptint = () => {
    // 生成并输出指纹
    const result = generateCanvasFingerprint();
    console.log('Canvas指纹:', result.fingerprint);
    console.log('Canvas数据URL前100个字符:', result.dataURL.substring(0, 100) + '...');

    // 如果浏览器支持更安全的哈希算法，也可以使用它
    if (window.crypto && window.crypto.subtle) {
        const encoder = new TextEncoder();
        const data = encoder.encode(result.dataURL);

        window.crypto.subtle.digest('SHA-256', data)
            .then(hashBuffer => {
                // 将哈希缓冲区转换为十六进制字符串
                const hashArray = Array.from(new Uint8Array(hashBuffer));
                const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

                console.log('Canvas指纹(SHA-256):', hashHex);
            });
    }
}