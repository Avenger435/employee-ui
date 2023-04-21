export class Insurance {

    private _insurance_type: string = '';
    public get insurance_type(): string {
        return this._insurance_type;
    }
    public set insurance_type(value: string) {
        this._insurance_type = value;
    }

    private _plan_name: string = '';
    public get plan_name(): string {
        return this._plan_name;
    }
    public set plan_name(value: string) {
        this._plan_name = value;
    }

    private _premium: string = '';
    public get premium(): string {
        return this._premium;
    }
    public set premium(value: string) {
        this._premium = value;
    }

    private _expiry_date: string = '';
    public get expiry_date(): string {
        return this._expiry_date;
    }
    public set expiry_date(value: string) {
        this._expiry_date = value;
    }

    private _due_date: string = '';
    public get due_date(): string {
        return this._due_date;
    }
    public set due_date(value: string) {
        this._due_date = value;
    }

    private _insuranceErrorMsg: string = '';
    public get insuranceErrorMsg(): string {
        return this._insuranceErrorMsg;
    }
    public set insuranceErrorMsg(value: string) {
        this._insuranceErrorMsg = value;
    }

}
