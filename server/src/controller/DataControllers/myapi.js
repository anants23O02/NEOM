import pool from "../../config/db.js";

export const myapi = async (req, res) => {
    console.log('here in this :>> ');

    const cords = [
        [[28.043417, 34.711333], 21],
        [[28.043639, 34.708528], 22],
        [[28.043361, 34.706083], 23],
        [[28.045583, 34.712667], 24],
        [[28.048222, 34.711278], 25],
        [[28.051750, 34.721444], 26],
        [[28.049000, 34.718278], 27],
        [[28.047750, 34.713611], 28],
        [[28.051561, 34.715805], 19],
    ];

    for (let i = 0; i < cords.length; i++) {
        const query = `UPDATE events SET location = $1 WHERE id = $2;`;
        const values = [`{${cords[i][0][0]}, ${cords[i][0][1]}}`, cords[i][1]]; // Ensure it's in PostgreSQL array format
        await pool.query(query, values);
    }

    res.json({ message: "done" });
};
