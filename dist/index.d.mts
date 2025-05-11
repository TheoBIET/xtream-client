declare class Xtream {
    private readonly url;
    private readonly username;
    private readonly password;
    private api;
    constructor(url: string, username: string, password: string);
    private get;
    login(): Promise<{
        user_info: {
            auth: number;
            username: string;
            password: string;
            message: string;
            status: "Active" | "Inactive";
            exp_date: string;
            is_trial: string;
            active_cons: string;
            created_at: string;
            max_connections: string;
            allowed_output_formats: string[];
        };
        server_info?: unknown;
    }>;
}

export { Xtream };
