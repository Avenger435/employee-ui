export class Address {

    private _address_name: string = '';
    public get address_name(): string {
        return this._address_name;
    }
    public set address_name(value: string) {
        this._address_name = value;
    }

    private _address_type: string = '';
    public get address_type(): string {
        return this._address_type;
    }
    public set address_type(value: string) {
        this._address_type = value;
    }

    private _street: string = '';
    public get street(): string {
        return this._street;
    }
    public set street(value: string) {
        this._street = value;
    }

    private _landmark: string = '';
    public get landmark(): string {
        return this._landmark;
    }
    public set landmark(value: string) {
        this._landmark = value;
    }

    private _city: string = '';
    public get city(): string {
        return this._city;
    }
    public set city(value: string) {
        this._city = value;
    }

    private _state: string = '';
    public get state(): string {
        return this._state;
    }
    public set state(value: string) {
        this._state = value;
    }

    private _pincode: string = '';
    public get pincode(): string {
        return this._pincode;
    }
    public set pincode(value: string) {
        this._pincode = value;
    }

    private _addressErrorMsg: string = '';
    public get addressErrorMsg(): string {
        return this._addressErrorMsg;
    }
    public set addressErrorMsg(value: string) {
        this._addressErrorMsg = value;
    }




}
