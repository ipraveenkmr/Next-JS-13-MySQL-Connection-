import { query } from "@/lib/db";

export async function GET(request) {
    const users = await query({
        query: "SELECT * FROM visitors",
        values: [],
    });

    let data = JSON.stringify(users);
    return new Response(data, {
        status: 200,
    });
}

export async function POST(request) {

    try {
        const { visitor_name } = await request.json();
        const updateUsers = await query({
            query: "INSERT INTO visitors (visitor_name) VALUES (?)",
            values: [visitor_name],
        });
        const result = updateUsers.affectedRows;
        let message = "";
        if (result) {
            message = "success";
        } else {
            message = "error";
        }
        const product = {
            visitor_name: visitor_name,
        };
        return new Response(JSON.stringify({
            message: message,
            status: 200,
            product: product
        }));
    } catch (error) {
        return new Response(JSON.stringify({
            status: 500,
            data: request
        }));
    }
}

export async function PUT(request) {

    try {
        const { id, visitor_name } = await request.json();
        const updateProducts = await query({
            query: "UPDATE visitors SET visitor_name = ? WHERE id = ?",
            values: [visitor_name, id],
        });
        const result = updateProducts.affectedRows;
        let message = "";
        if (result) {
            message = "success";
        } else {
            message = "error";
        }
        const product = {
            id: id,
            visitor_name: visitor_name,
        };
        return new Response(JSON.stringify({
            message: message,
            status: 200,
            product: product
        }));
    } catch (error) {
        return new Response(JSON.stringify({
            status: 500,
            data: res
        }));
    }

}


export async function DELETE(request) {

    try {
        const { id } = await request.json();
        const deleteUser = await query({
            query: "DELETE FROM visitors WHERE id = ?",
            values: [id],
        });
        const result = deleteUser.affectedRows;
        let message = "";
        if (result) {
            message = "success";
        } else {
            message = "error";
        }
        const product = {
            id: id,
        };
        return new Response(JSON.stringify({
            message: message,
            status: 200,
            product: product
        }));
    } catch (error) {
        return new Response(JSON.stringify({
            status: 500,
            data: res
        }));
    }

}
