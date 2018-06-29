

### 函数

```
  <!-- 传参 -->
  <Button type="primary" style={{marginRight:40}} onClick={()=>pass(1)}>通过</Button>

  <!-- 拿到 e 值 -->
  <Input type="text" placeholder="请输入原因" onChange={inputReason} />

    const inputReason = (e) => {
        console.log(e.target.value);
    }
```
