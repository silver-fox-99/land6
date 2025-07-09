import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import './contact-block.scss'
import arrowIcon from './arrowIcon.svg'
import { motion } from "framer-motion";

export default function ContactBlock() {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [fetchError, setFetchError] = useState(null);

    const { control, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = useForm();

    // Получаем страны из API
    useEffect(() => {
        setLoading(true);
        fetch('https://restcountries.com/v3.1/all?fields=cca2,name,flags')
            .then(res => res.json())
            .then(data => {
                // Берём только нужные поля
                const result = data
                    .map((c) => ({
                        code: c.cca2,
                        name: c.name.common,
                        flag: c.flags?.svg || c.flags?.png || "",
                    }))
                    .sort((a, b) => a.name.localeCompare(b.name));
                setCountries(result);
                setLoading(false);
            })
            .catch((e) => {
                setFetchError("Failed to load country list");
                setLoading(false);
            });
    }, []);

    const onSubmit = async (data) => {
        try {
            const formatedData = {
                name: data.name + ' ' + data.surname,
                phone: data.phone,
                email: data.email,
                amount: 'more 5000',
                issue_category: 'socarinvest',
                message: '0.0.0.0scscscs',
                country: data.country
            }

            await fetch(`${process.env.REACT_APP_PROXY_URL}/lead/register-lead-from-brand`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formatedData)
            })


            reset();
        } catch (e) {
            alert(e);
        }
        // Здесь твой submit (API или почта)

    };

    return (
        <motion.div
            className="contact-block"
            initial={{opacity: 0, y: 40}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.7, ease: "easeOut"}}
            viewport={{once: true, amount: 0.35}}
        >
            <h3 className="contact-block__title">Contact Us</h3>
            <p className="contact-block__description">
                Open an account and take your trading to the level of a “smart machine.”
                We’re here to craft a strategy built around your financial ambitions.
            </p>
            <form className="contact-block__form" onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                <Controller
                    name="name"
                    control={control}
                    rules={{required: "Enter your name"}}
                    render={({field}) => (
                        <TextField
                            {...field}
                            label="Name"
                            variant="outlined"
                            error={!!errors.name}
                            helperText={errors.name?.message}
                            fullWidth
                            sx={muiInputStyle}
                        />
                    )}
                />
                <Controller
                    name="surname"
                    control={control}
                    rules={{required: "Enter your surname"}}
                    render={({field}) => (
                        <TextField
                            {...field}
                            label="Surname"
                            variant="outlined"
                            error={!!errors.surname}
                            helperText={errors.surname?.message}
                            fullWidth
                            sx={muiInputStyle}
                        />
                    )}
                />
                <Controller
                    name="email"
                    control={control}
                    rules={{
                        required: "Enter your email",
                        pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: "Invalid email",
                        },
                    }}
                    render={({field}) => (
                        <TextField
                            {...field}
                            label="Email"
                            variant="outlined"
                            error={!!errors.email}
                            helperText={errors.email?.message}
                            fullWidth
                            sx={muiInputStyle}
                        />
                    )}
                />
                <Controller
                    name="country"
                    control={control}
                    rules={{required: "Choose your country"}}
                    render={({field}) => (
                        <Autocomplete
                            {...field}
                            options={countries}
                            loading={loading}
                            getOptionLabel={(option) => option?.name || ""}
                            onChange={(_, value) => field.onChange(value)}
                            isOptionEqualToValue={(opt, val) => opt.code === val.code}
                            renderOption={(props, option) => (
                                <li {...props} key={option.code}>
                                    {option.flag && (
                                        <img src={option.flag} alt={option.code} style={{
                                            width: 18,
                                            marginRight: 7,
                                            borderRadius: 2,
                                            verticalAlign: "middle"
                                        }}/>
                                    )}
                                    {option.name}
                                </li>
                            )}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Country"
                                    variant="outlined"
                                    error={!!errors.country}
                                    helperText={errors.country?.message}
                                    sx={muiInputStyle}
                                    InputProps={{
                                        ...params.InputProps,
                                        endAdornment: (
                                            <>
                                                {loading ? <CircularProgress color="inherit" size={18}/> : null}
                                                {params.InputProps.endAdornment}
                                            </>
                                        ),
                                    }}
                                />
                            )}
                            fullWidth
                            disabled={loading || !!fetchError}
                        />
                    )}
                />
                {fetchError && (
                    <div style={{color: "#ff4c4c", marginBottom: 10, marginTop: -8}}>
                        {fetchError}
                    </div>
                )}
                <Controller
                    name="phone"
                    control={control}
                    rules={{required: "Enter your phone number"}}
                    render={({field}) => (
                        <TextField
                            {...field}
                            label="Phone number"
                            variant="outlined"
                            error={!!errors.phone}
                            helperText={errors.phone?.message}
                            fullWidth
                            sx={muiInputStyle}
                        />
                    )}
                />
                <Button
                    type="submit"
                    className="contact-block__submit"
                    fullWidth
                    sx={{
                        background: "#fd532f",
                        borderRadius: "28px",
                        fontSize: 20,
                        padding: "16px 0",
                        fontWeight: 600,
                        marginTop: 2,
                        height: 52,
                        color: "#000",
                        "&:hover": {background: "#ff7c5b"},
                        letterSpacing: "0.02em",
                        textTransform: "none",
                    }}
                    disabled={loading || !!fetchError}
                >
                    Sent <img src={arrowIcon} alt="arrow" style={{marginLeft: 4}}/>
                </Button>
                {isSubmitSuccessful && (
                    <div className="contact-block__success">
                        Thank you! We’ll contact you soon.
                    </div>
                )}
            </form>
        </motion.div>
    );
}

// Стили для полей, чтобы они были в твоем стиле (тёмный фон, оранжевая рамка)
const muiInputStyle = {
    input: {color: "#fff", background: "#232323"},
    label: {color: "#fff"},
    "& .MuiOutlinedInput-root": {
        "& fieldset": {
            borderColor: "#fd532f44",
        },
        "&:hover fieldset": {
            borderColor: "#fd532f",
        },
        "&.Mui-focused fieldset": {
            borderColor: "#fd532f",
        },
    },
    "& .MuiInputLabel-root": { color: "#fff" },
    "& .MuiFormHelperText-root": { color: "#fd532f" },
    borderRadius: "7px",
    mb: 1.2,
};
