import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import matrix from '../assets/images/matrix.jpg';


interface Props {
    title: string
}

const useStyles = makeStyles({
    root: {
        padding: '0',
        margin: '0'
    },

    main: {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${matrix});`,
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        position: 'absolute'
    },
    main_text: {
        fontFamily: 'Courier',
        textAlign: 'center',
        position: 'relative',
        top: '25%',
        left: '50%',
        transform: 'translat(-50%, -50%)',
        color: 'black',
        fontSize: '30px'
    }
});


export const Home = (props:Props) => {

    const classes = useStyles();

    return (
        <div className={classes.root}>

            {/* <nav>
                <div className={classes.navbar_container}>
                    <ul className={`${classes.navigation} ${classes.logo_navigation}`}>
                        <li>
                            <Link to="/" className={classes.nav_a}>Home</Link>
                        </li>
                        <li>
                            <Link to="/portfolio" className={classes.nav_a}>Check It Out</Link>
                        </li>
                        <li>
                            <Link to="/contact" className={classes.nav_a}>Say Hi</Link>
                        </li>
                    </ul>
                </div>
            </nav> */}

            <main className={classes.main}>
                
                <div className={classes.main_text}>
                    <Link to='/portfolio'>
                        <Button color='primary' variant="contained">Check This Out!</Button>
                    </Link>
                    <Link to='/contact'>
                        <Button color='secondary' variant="contained">Say Hi...</Button>
                    </Link>
                </div>
            </main>

        </div>
    )
}