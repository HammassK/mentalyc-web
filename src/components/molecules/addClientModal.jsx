import PropTypes from "prop-types";
import {
  Box,
  Modal,
  Typography,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  MenuItem,
  Select,
  FormControl,
} from "@mui/material";
import { useState } from "react";
import { mainStyles } from "../../styles/mainStyles";
import CrossIcon from "../../assets/svgs/crossIcon";
import Switch from "../atoms/switch";
import TypeRadioGroup from "./typeRadioGroup";

const AddClientModal = ({ open, toggleModal }) => {
  const {
    modalSubContainer,
    selectLabel,
    modalCloseIcon,
    mandatoryField,
    modalHeader,
    modalSection,
    radioButton,
    buttonContainer,
    buttonStyle,
  } = mainStyles;
  const [clientType, setClientType] = useState("Individual");
  const [pronouns, setPronouns] = useState("He/Him");
  const [diagnosis, setDiagnosis] = useState(
    "F43.22 - Adjustment disorder with anxiety"
  );

  return (
    <Modal
      open={open}
      onClose={toggleModal}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box sx={{ ...modalSubContainer, width: { xs: "85%", md: "528px" } }}>
        <Box sx={modalCloseIcon} onClick={toggleModal}>
          <CrossIcon />
        </Box>
        <Typography id="modal-title" sx={modalHeader}>
          Add new client
        </Typography>
        <Typography id="modal-description" variant="body2" sx={modalSection}>
          This client information is essential for generating detailed clients
          documents
        </Typography>
        <TypeRadioGroup
          label={"Client type"}
          clientType={clientType}
          setClientType={setClientType}
        />
        {clientType === "Couple" ? (
          <>
            {" "}
            <FormControl fullWidth>
              <label style={selectLabel}>
                Name 1 <span style={mandatoryField}>*</span>
              </label>
              <TextField
                defaultValue=""
                variant="outlined"
                sx={{
                  ...modalSection,
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8px",

                    "& fieldset": {
                      borderColor: "#EBEBEB",
                    },
                    "& .MuiInputAdornment-root": {
                      color: "#731054",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#731054",
                    },
                    "&:hover fieldset": {
                      borderColor: "#731054",
                    },
                  },
                }}
                size="small"
              />
            </FormControl>
            <FormControl fullWidth>
              <label style={selectLabel}>
                Name 2 <span style={mandatoryField}>*</span>
              </label>
              <TextField
                defaultValue=""
                variant="outlined"
                sx={{
                  ...modalSection,
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8px",

                    "& fieldset": {
                      borderColor: "#EBEBEB",
                    },
                    "& .MuiInputAdornment-root": {
                      color: "#731054",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#731054",
                    },
                    "&:hover fieldset": {
                      borderColor: "#731054",
                    },
                  },
                }}
                size="small"
              />
            </FormControl>
          </>
        ) : (
          <>
            <FormControl fullWidth>
              <label style={selectLabel}>
                Name <span style={mandatoryField}>*</span>
              </label>
              <TextField
                defaultValue=""
                variant="outlined"
                sx={{
                  ...modalSection,
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8px",

                    "& fieldset": {
                      borderColor: "#EBEBEB",
                    },
                    "& .MuiInputAdornment-root": {
                      color: "#731054",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#731054",
                    },
                    "&:hover fieldset": {
                      borderColor: "#731054",
                    },
                  },
                }}
                size="small"
              />
            </FormControl>
            <label style={selectLabel}>
              Pronouns <span style={mandatoryField}>*</span>
            </label>
            <RadioGroup
              row
              value={pronouns}
              onChange={(e) => setPronouns(e.target.value)}
              sx={modalSection}
            >
              <FormControlLabel
                value="He/Him"
                control={
                  <Radio
                    sx={{
                      ...radioButton,
                      "&.Mui-checked": {
                        color: "#731054",
                      },
                    }}
                  />
                }
                label="He/Him"
                slotProps={{
                  typography: {
                    sx: {
                      fontSize: "12px",
                      color: "#040404",
                    },
                  },
                }}
              />
              <FormControlLabel
                value="She/Her"
                control={
                  <Radio
                    sx={{
                      ...radioButton,
                      "&.Mui-checked": {
                        color: "#731054",
                      },
                    }}
                  />
                }
                label="She/Her"
                slotProps={{
                  typography: {
                    sx: {
                      fontSize: "12px",
                      color: "#040404",
                    },
                  },
                }}
              />
              <FormControlLabel
                value="They/Them"
                control={
                  <Radio
                    sx={{
                      ...radioButton,
                      "&.Mui-checked": {
                        color: "#731054",
                      },
                    }}
                  />
                }
                label="They/Them"
                slotProps={{
                  typography: {
                    sx: {
                      fontSize: "12px",
                      color: "#040404",
                    },
                  },
                }}
              />
            </RadioGroup>
            <FormControl fullWidth>
              <label style={selectLabel}>Year of birth</label>
              <TextField
                defaultValue=""
                variant="outlined"
                sx={{
                  ...modalSection,
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8px",

                    "& fieldset": {
                      borderColor: "#EBEBEB",
                    },
                    "& .MuiInputAdornment-root": {
                      color: "#731054",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#731054",
                    },
                    "&:hover fieldset": {
                      borderColor: "#731054",
                    },
                  },
                }}
                size="small"
              />
            </FormControl>
          </>
        )}

        <FormControl fullWidth sx={modalSection}>
          <label style={selectLabel}>Diagnosis</label>

          <Select
            labelId="diagnosis-label"
            value={diagnosis}
            onChange={(e) => setDiagnosis(e.target.value)}
            variant="outlined"
            size="small"
            sx={{
              borderRadius: "8px",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#EBEBEB",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#731054",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#731054",
              },
              textAlign: "start",
              fontSize: "14px",
            }}
          >
            <MenuItem value="F43.22 - Adjustment disorder with anxiety">
              F43.22 - Adjustment disorder with anxiety
            </MenuItem>
            <MenuItem value="F41.1 - Generalized anxiety disorder">
              F41.1 - Generalized anxiety disorder
            </MenuItem>
            <MenuItem value="F32.0 - Mild depressive episode">
              F32.0 - Mild depressive episode
            </MenuItem>
          </Select>
        </FormControl>

        <Switch label={"High risk client"} />

        <FormControl fullWidth>
          <label style={selectLabel}>Extra notes</label>
          <TextField
            defaultValue=""
            variant="outlined"
            placeholder="Extra information about your client"
            sx={{
              ...modalSection,
              "& .MuiOutlinedInput-root": {
                borderRadius: "8px",

                "& fieldset": {
                  borderColor: "#EBEBEB",
                },
                "& .MuiInputAdornment-root": {
                  color: "#731054",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#731054",
                },
                "&:hover fieldset": {
                  borderColor: "#731054",
                },
              },
            }}
            size="small"
          />
        </FormControl>

        <Box sx={buttonContainer}>
          <Button
            variant="contained"
            sx={{
              ...buttonStyle,
              ":hover": {
                borderColor: "#731054",
                backgroundColor: "#731054",
              },
              ":focus": {
                outline: "none",
                boxShadow: "none",
              },
            }}
            onClick={toggleModal}
          >
            Add client
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

AddClientModal.propTypes = {
  open: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default AddClientModal;
