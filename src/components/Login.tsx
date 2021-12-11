import React, { useState, useEffect } from "react";
import styles from "../styles/Login.module.css";
import { Button, FormControl, TextField, Typography } from "@material-ui/core";
import { auth } from "../firebase";

const Login: React.FC = (props: any) => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail ] = useState("");
    const [password, setPassword ] = useState("");

    useEffect(() => {
        const unSub = auth.onAuthStateChanged((user) => {
            user && props.history.push("/");
        });
        return () => unSub();
    }, [props.history]);

    return (
        <div className={styles.login__root}>
            <h1>{isLogin ? "Login" : "Register"}</h1>
            <br />
            <FormControl>
                <TextField 
                    InputLabelProps={{
                        shrink: true,
                    }}
                    name="email"
                    label="email"
                    value={email}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setEmail(event.target.value);
                    }}
                ></TextField>
            </FormControl>
            <br />
            <FormControl>
                <TextField 
                    InputLabelProps={{
                        shrink: true,
                    }}
                    name="password"
                    label="password"
                    value={password}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setPassword(event.target.value);
                    }}
                ></TextField>
            </FormControl>
            <br />
            <Button 
                variant="contained" 
                color="primary" 
                size="small" 
                onClick={
                    isLogin ? async () => {
                        try {
                            await auth.signInWithEmailAndPassword(email, password);
                            props.history.push("/");
                        } catch (error: any) {
                            alert(error.message);
                        }
                    } : async () => {
                        try {
                            await auth.createUserWithEmailAndPassword(email, password);
                            props.history.push("/");
                        } catch (error: any) {
                            alert(error.message);
                        }
                    }
            }
            >
                {isLogin ? "login" : "register"}
            </Button>
            <br />
            <Typography align="center">
                <span onClick={() => setIsLogin(!isLogin)}>
                    {isLogin ? "Create new account ?" : "Back to login"}
                </span>
            </Typography>
        </div>
    );
}

export default Login;