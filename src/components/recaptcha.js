(() => ({
  name: 'Recaptcha',
  type: 'CONTENT_COMPONENT',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  dependencies: [
    {
      label: 'Recaptcha',
      package: 'npm:react-google-recaptcha@2.1.0',
      imports: ['*'],
    },
  ],
  jsx: (() => {
    const { useText } = B;
    const { sitekey, actionVariableId: name } = options;

    const recaptchaRef = useRef();
    const [response, setResponse] = useState('');

    const {
      Recaptcha: { default: ReCAPTCHA },
    } = dependencies;

    const onChange = (value) => {
      setResponse(value);
    };

    return (
      <div className={classes.root}>
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={useText(sitekey)}
          onChange={onChange}
          size="normal"
        />
        <input type="hidden" name={name} value={response} />
        <br />
        <br />
      </div>
    );
  })(),
  styles: () => () => ({
    root: {},
  }),
}))();
